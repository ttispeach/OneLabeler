import {
  Category,
  ICommand,
  IDataObjectStorage,
  ILabelStorage,
  IMessage,
  IStatusStorage,
  TaskWindow,
} from '@/commons/types';
import { IState } from './state';
import * as types from './mutation-types';

export default {
  [types.SET_DATA_OBJECTS](state: IState, dataObjects: IDataObjectStorage): void {
    state.dataObjects = dataObjects;
  },
  [types.SET_CLASSES](state: IState, classes: Category[]): void {
    state.classes = classes;
  },
  [types.SET_STOP](state: IState, stop: boolean): void {
    state.stop = stop;
  },
  [types.SET_LABELS](state: IState, labels: ILabelStorage): void {
    state.labels = labels;
  },
  [types.SET_STATUSES](state: IState, statuses: IStatusStorage): void {
    state.statuses = statuses;
  },
  [types.SET_UNLABELED_MARK](state: IState, unlabeledMark: Category): void {
    state.unlabeledMark = unlabeledMark;
  },
  [types.SET_FEATURE_NAMES](state: IState, featureNames: string[]): void {
    state.featureNames = featureNames;
  },
  [types.SET_QUERY_UUIDS](state: IState, queryUuids: string[]): void {
    state.queryUuids = queryUuids;
  },
  [types.SET_COMMAND_HISTORY](state: IState, commandHistory: ICommand[]): void {
    state.commandHistory = commandHistory;
  },
  [types.SET_MESSAGE](state: IState, message: IMessage): void {
    state.message = message;
  },
  [types.SET_TASK_WINDOWS](state: IState, taskWindows: TaskWindow[]): void {
    state.taskWindows = taskWindows;
  },
  [types.SET_SCOPE_UUIDS](state: IState, scopeUuids: string[]): void {
    state.scopeUuids = scopeUuids;
  },
};
