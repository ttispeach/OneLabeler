import axios from 'axios';
import {
  IDataObject,
  IDataObjectStorage,
  IDataTypeSetup,
  ILabel,
  IVideo,
  LabelTaskType,
  UploadTarget,
} from '@/commons/types';
import { parseCsvFile } from '@/plugins/file';
import VDisplay from './VDisplay.vue';

type IExport<T extends IDataObject> = (
  Partial<ILabel> & { content: T['content'] }
)[];

const getVideoSize = async (url: string): Promise<{
  width: number,
  height: number,
}> => {
  /**
   * reference
   * [1] https://github.com/leedo/noembed
   * [2] https://stackoverflow.com/questions/30084140
   */
  const { data } = await axios.get(`https://noembed.com/embed?url=${url}`);
  const { width, height } = data;
  return { width, height };
};

export default {
  type: 'YoutubeVideo',
  tasks: [
    LabelTaskType.Classification,
    LabelTaskType.FreeformText,
    LabelTaskType.SpanClassification,
  ],
  label: 'youtube video',
  importType: UploadTarget.File,
  handleImport: async (input: File, storage: IDataObjectStorage) => {
    const file = input as File;
    const records = await parseCsvFile(file) as Record<string, any>[];
    await Promise.all(records.map(async (d) => {
      const content = d.url;
      const uuid = d.id;
      const {
        width,
        height,
      } = await getVideoSize(content);
      const dataObject: IVideo = {
        uuid,
        content,
        width,
        height,
      };
      storage.upsert(dataObject);
    }));
  },
  handleExport: <T extends IDataObject>(
    dataObjects: T[],
    labels: ILabel[],
  ): IExport<T> => {
    const uuid2idxInLabels: Record<string, number> = {};
    labels.forEach((d: ILabel, i) => {
      uuid2idxInLabels[d.uuid] = i;
    });
    return dataObjects.map((d) => {
      const partial = {
        uuid: d.uuid,
        content: d.content,
      };
      const idx = uuid2idxInLabels[d.uuid];
      return idx === undefined ? partial : { ...labels[idx], ...partial };
    });
  },
  display: VDisplay,
} as IDataTypeSetup<UploadTarget.File>;