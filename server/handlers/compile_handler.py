import json
import shutil
import subprocess

import dotenv
import tornado.web

CLIENT_CODEBASE_PATH = '../client'

class CompileHandler(tornado.web.RequestHandler):
    """
    The handler for image labeling.
    """

    def post(self, key: str):
        self.set_header('Access-Control-Allow-Origin', '*')
        json_data = json.loads(self.request.body)
        workflow = json_data['workflow']

        if key not in ['exe', 'zip']:
            # The service is not found.
            self.send_error(404)
            return
        
        env_file = dotenv.find_dotenv(f'{CLIENT_CODEBASE_PATH}/.env')
        
        old_title = dotenv.get_key(env_file, 'VUE_APP_TITLE')
        old_default_workflow = dotenv.get_key(env_file, 'VUE_APP_DEFAULT_WORKFLOW')
        old_user_type = dotenv.get_key(env_file, 'VUE_APP_USER_TYPE')
        
        dotenv.set_key(env_file, 'VUE_APP_TITLE', 'MyLabeler')
        dotenv.set_key(env_file, 'VUE_APP_DEFAULT_WORKFLOW', json.dumps(workflow))
        dotenv.set_key(env_file, 'VUE_APP_USER_TYPE', 'ANNOTATOR')

        if key == 'exe':
            try:
                subprocess.check_call('npm run electron:build',
                                      shell=True, cwd=CLIENT_CODEBASE_PATH)
            except:
                print('compile failed')
            path = f'{CLIENT_CODEBASE_PATH}/dist_electron/one-labeler Setup 0.1.0.exe'
            with open(path, 'rb') as f:
                self.write(f.read())
        
        if key == 'zip':
            filename = 'source'
            extname = 'zip'
            try:
                subprocess.check_call(f'git archive -o {filename}.{extname} HEAD',
                                      shell=True, cwd=CLIENT_CODEBASE_PATH)
            except:
                print('compile failed')
            path = f'{CLIENT_CODEBASE_PATH}/{filename}.{extname}'
            with open(path, 'rb') as f:
                self.write(f.read())

        dotenv.set_key(env_file, 'VUE_APP_TITLE', old_title)
        dotenv.set_key(env_file, 'VUE_APP_DEFAULT_WORKFLOW', old_default_workflow)
        dotenv.set_key(env_file, 'VUE_APP_USER_TYPE', old_user_type)