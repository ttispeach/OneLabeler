import ObjectId from 'bson-objectid';
import {
  DataType,
  ModelService,
  Process,
  ProcessType,
} from '@/commons/types';
import { PROTOCOL, IP, PORT } from '@/services/http-params';

export const modelServices: ModelService[] = [{
  type: 'DecisionTree',
  label: 'DecisionTree (Supervised)',
  objectId: (new ObjectId('DecisionTree')).toHexString(),
  isBuiltIn: true,
  isServerless: false,
  isValidSampler: false,
  // id: 'DecisionTree-95912701',
  // api: `${PROTOCOL}://${IP}:${PORT}/model/DecisionTree`,
  // isLocal: true,
}, {
  type: 'SVM',
  label: 'SVM (Supervised)',
  objectId: (new ObjectId('SVM000000000')).toHexString(),
  isBuiltIn: true,
  isServerless: false,
  isValidSampler: false,
  // id: 'SVM-99885399',
  // api: `${PROTOCOL}://${IP}:${PORT}/model/SVM`,
  // isLocal: true,
}, {
  type: 'LogisticRegression',
  label: 'LogisticRegression (Supervised)',
  objectId: (new ObjectId('LogisticRegr')).toHexString(),
  isBuiltIn: true,
  isServerless: false,
  isValidSampler: true,
  // id: 'LogisticRegression-75095119',
  // api: `${PROTOCOL}://${IP}:${PORT}/model/LogisticRegression`,
  // isLocal: true,
}, {
  type: 'RestrictedBoltzmannMachine',
  label: 'RestrictedBoltzmannMachine (Supervised)',
  objectId: (new ObjectId('RestrictedBo')).toHexString(),
  isBuiltIn: true,
  isServerless: false,
  isValidSampler: false,
  // id: 'RestrictedBoltzmannMachine-73157581',
  // api: `${PROTOCOL}://${IP}:${PORT}/model/RestrictedBoltzmannMachine`,
  // isLocal: true,
}, {
  type: 'LabelSpreading',
  label: 'LabelSpreading (Semi-Supervised)',
  objectId: (new ObjectId('LabelSpreadi')).toHexString(),
  isBuiltIn: true,
  isServerless: false,
  isValidSampler: true,
  // id: 'LabelSpreading-81419641',
  // api: `${PROTOCOL}://${IP}:${PORT}/model/LabelSpreading`,
  // isLocal: true,
}];

const dataObjectSelectionMethods: Process[] = [{
  type: ProcessType.DataObjectSelection,
  label: 'Projection (User Sampling)',
  id: 'Projection',
  inputs: ['features', 'labels'],
  isAlgorithmic: false,
  isBuiltIn: true,
  isModelBased: false,
  isServerless: true,
  api: 'Projection',
}, {
  type: ProcessType.DataObjectSelection,
  label: 'Random (Dummy)',
  id: 'Random-73417867',
  inputs: ['labels'],
  isAlgorithmic: true,
  isBuiltIn: true,
  isModelBased: false,
  isServerless: true,
  api: 'Random',
  params: {
    nBatch: {
      value: 48,
      label: 'Selection Batch Size',
      options: [
        { value: 1, label: '1' },
        { value: 4, label: '4' },
        { value: 16, label: '16' },
        { value: 32, label: '32' },
        { value: 48, label: '48' },
        { value: 64, label: '64' },
        { value: 96, label: '96' },
      ],
    },
  },
}, {
  type: ProcessType.DataObjectSelection,
  label: 'Cluster (Clustering)',
  id: 'Cluster-13466955',
  inputs: ['features', 'labels'],
  isAlgorithmic: true,
  isBuiltIn: true,
  isModelBased: false,
  isServerless: false,
  api: `${PROTOCOL}://${IP}:${PORT}/selection/Cluster`,
  params: {
    nBatch: {
      value: 48,
      label: 'Selection Batch Size',
      options: [
        { value: 1, label: '1' },
        { value: 4, label: '4' },
        { value: 16, label: '16' },
        { value: 32, label: '32' },
        { value: 48, label: '48' },
        { value: 64, label: '64' },
        { value: 96, label: '96' },
      ],
    },
  },
}, {
  type: ProcessType.DataObjectSelection,
  label: 'DenseAreas (Clustering)',
  id: 'DenseAreas-67390401',
  inputs: ['features', 'labels'],
  isAlgorithmic: true,
  isBuiltIn: true,
  isModelBased: false,
  isServerless: false,
  api: `${PROTOCOL}://${IP}:${PORT}/selection/DenseAreas`,
  params: {
    nBatch: {
      value: 48,
      label: 'Selection Batch Size',
      options: [
        { value: 1, label: '1' },
        { value: 4, label: '4' },
        { value: 16, label: '16' },
        { value: 32, label: '32' },
        { value: 48, label: '48' },
        { value: 64, label: '64' },
        { value: 96, label: '96' },
      ],
    },
  },
}, {
  type: ProcessType.DataObjectSelection,
  label: 'ClusterCentroids (Clustering)',
  id: 'ClusterCentroids-60587176',
  inputs: ['features', 'labels'],
  isAlgorithmic: true,
  isBuiltIn: true,
  isModelBased: false,
  isServerless: false,
  api: `${PROTOCOL}://${IP}:${PORT}/selection/ClusterCentroids`,
  params: {
    nBatch: {
      value: 48,
      label: 'Selection Batch Size',
      options: [
        { value: 1, label: '1' },
        { value: 4, label: '4' },
        { value: 16, label: '16' },
        { value: 32, label: '32' },
        { value: 48, label: '48' },
        { value: 64, label: '64' },
        { value: 96, label: '96' },
      ],
    },
  },
}, {
  type: ProcessType.DataObjectSelection,
  label: 'Entropy (Active Learning)',
  id: 'Entropy-49394355',
  inputs: ['features', 'labels', 'model'],
  isAlgorithmic: true,
  isBuiltIn: true,
  isModelBased: true,
  isServerless: false,
  api: `${PROTOCOL}://${IP}:${PORT}/selection/Entropy`,
  model: undefined,
  params: {
    nBatch: {
      value: 48,
      label: 'Selection Batch Size',
      options: [
        { value: 1, label: '1' },
        { value: 4, label: '4' },
        { value: 16, label: '16' },
        { value: 32, label: '32' },
        { value: 48, label: '48' },
        { value: 64, label: '64' },
        { value: 96, label: '96' },
      ],
    },
  },
}, {
  type: ProcessType.DataObjectSelection,
  label: 'LeastConfident (Active Learning)',
  id: 'LeastConfident-12520162',
  inputs: ['features', 'labels', 'model'],
  isAlgorithmic: true,
  isBuiltIn: true,
  isModelBased: true,
  isServerless: false,
  api: `${PROTOCOL}://${IP}:${PORT}/selection/LeastConfident`,
  model: undefined,
  params: {
    nBatch: {
      value: 48,
      label: 'Selection Batch Size',
      options: [
        { value: 1, label: '1' },
        { value: 4, label: '4' },
        { value: 16, label: '16' },
        { value: 32, label: '32' },
        { value: 48, label: '48' },
        { value: 64, label: '64' },
        { value: 96, label: '96' },
      ],
    },
  },
}, {
  type: ProcessType.DataObjectSelection,
  label: 'SmallestMargin (Active Learning)',
  id: 'SmallestMargin-74021796',
  inputs: ['features', 'labels', 'model'],
  isAlgorithmic: true,
  isBuiltIn: true,
  isModelBased: true,
  isServerless: false,
  api: `${PROTOCOL}://${IP}:${PORT}/selection/SmallestMargin`,
  model: undefined,
  params: {
    nBatch: {
      value: 48,
      label: 'Selection Batch Size',
      options: [
        { value: 1, label: '1' },
        { value: 4, label: '4' },
        { value: 16, label: '16' },
        { value: 32, label: '32' },
        { value: 48, label: '48' },
        { value: 64, label: '64' },
        { value: 96, label: '96' },
      ],
    },
  },
}, {
  type: ProcessType.DataObjectSelection,
  label: 'EntropyDiversity (Active Learning)',
  id: 'EntropyDiversity-98931757',
  inputs: ['features', 'labels', 'model'],
  isAlgorithmic: true,
  isBuiltIn: true,
  isModelBased: true,
  isServerless: false,
  api: `${PROTOCOL}://${IP}:${PORT}/selection/EntropyDiversity`,
  model: undefined,
  params: {
    nBatch: {
      value: 48,
      label: 'Selection Batch Size',
      options: [
        { value: 1, label: '1' },
        { value: 4, label: '4' },
        { value: 16, label: '16' },
        { value: 32, label: '32' },
        { value: 48, label: '48' },
        { value: 64, label: '64' },
        { value: 96, label: '96' },
      ],
    },
  },
}, {
  type: ProcessType.DataObjectSelection,
  label: 'EntropyDiversityDensity (Active Learning)',
  id: 'EntropyDiversityDensity-60957928',
  inputs: ['features', 'labels', 'model'],
  isAlgorithmic: true,
  isBuiltIn: true,
  isModelBased: true,
  isServerless: false,
  api: `${PROTOCOL}://${IP}:${PORT}/selection/EntropyDiversityDensity`,
  model: undefined,
  params: {
    nBatch: {
      value: 48,
      label: 'Selection Batch Size',
      options: [
        { value: 1, label: '1' },
        { value: 4, label: '4' },
        { value: 16, label: '16' },
        { value: 32, label: '32' },
        { value: 48, label: '48' },
        { value: 64, label: '64' },
        { value: 96, label: '96' },
      ],
    },
  },
}];

const defaultLabelingMethods: Process[] = [{
  type: ProcessType.DefaultLabeling,
  label: 'ModelPrediction',
  id: 'ModelPrediction-29967546',
  inputs: ['features', 'model'],
  isAlgorithmic: true,
  isBuiltIn: true,
  isModelBased: true,
  isServerless: false,
  model: undefined,
  api: `${PROTOCOL}://${IP}:${PORT}/defaultLabels/ModelPrediction`,
}, {
  type: ProcessType.DefaultLabeling,
  label: 'Null (Dummy)',
  id: 'Null-35514905',
  inputs: ['features'],
  isAlgorithmic: true,
  isBuiltIn: true,
  isModelBased: false,
  isServerless: true,
  api: 'Null',
}, {
  type: ProcessType.DefaultLabeling,
  label: 'Random (Dummy)',
  id: 'Random-38398168',
  inputs: ['features'],
  isAlgorithmic: true,
  isBuiltIn: true,
  isModelBased: false,
  isServerless: true,
  api: 'Random',
}];

const featureExtractionMethods: Process[] = [{
  type: ProcessType.FeatureExtraction,
  label: 'SVD (Unsupervised)',
  id: 'image-SVD-25940167',
  inputs: ['dataObjects'],
  isAlgorithmic: true,
  isBuiltIn: true,
  isModelBased: false,
  isServerless: false,
  api: `${PROTOCOL}://${IP}:${PORT}/features/image/SVD`,
  dataTypes: [DataType.Image],
}, {
  type: ProcessType.FeatureExtraction,
  label: 'BoW (Handcrafted)',
  id: 'image-BoW-6989392',
  inputs: ['dataObjects'],
  isAlgorithmic: true,
  isBuiltIn: true,
  isModelBased: false,
  isServerless: false,
  api: `${PROTOCOL}://${IP}:${PORT}/features/image/BoW`,
  dataTypes: [DataType.Image],
}, {
  type: ProcessType.FeatureExtraction,
  label: 'LDA (Supervised)',
  id: 'image-LDA-45100847',
  inputs: ['dataObjects', 'labels'],
  isAlgorithmic: true,
  isBuiltIn: true,
  isModelBased: false,
  isServerless: false,
  api: `${PROTOCOL}://${IP}:${PORT}/features/image/LDA`,
  dataTypes: [DataType.Image],
}, {
  type: ProcessType.FeatureExtraction,
  label: 'NMF (Unsupervised)',
  id: 'text-NMF-78139065',
  inputs: ['dataObjects'],
  isAlgorithmic: true,
  isBuiltIn: true,
  isModelBased: false,
  isServerless: false,
  api: `${PROTOCOL}://${IP}:${PORT}/features/text/NMF`,
  dataTypes: [DataType.Text],
}, {
  type: ProcessType.FeatureExtraction,
  label: 'Random3D (Dummy)',
  id: 'Random-87333124',
  inputs: ['dataObjects'],
  isAlgorithmic: true,
  isBuiltIn: true,
  isModelBased: false,
  isServerless: true,
  api: 'Random3D',
}];

const interactiveLabelingMethods: Process[] = [{
  type: ProcessType.InteractiveLabeling,
  label: 'Single Object Display',
  id: 'SingleObjectDisplay-48263667',
  inputs: ['dataObjects', 'samples'],
  isAlgorithmic: false,
  isBuiltIn: true,
  isModelBased: false,
  isServerless: true,
  api: 'SingleObjectDisplay',
}, {
  type: ProcessType.InteractiveLabeling,
  label: 'Grid Matrix',
  id: 'GridMatrix-89670576',
  inputs: ['dataObjects', 'samples'],
  isAlgorithmic: false,
  isBuiltIn: true,
  isModelBased: false,
  isServerless: true,
  api: 'GridMatrix',
  params: {
    nRows: {
      value: 6,
      label: 'Number of Objects per Column',
      options: [
        { value: 1, label: '1' },
        { value: 2, label: '2' },
        { value: 4, label: '4' },
        { value: 6, label: '6' },
        { value: 8, label: '8' },
      ],
    },
    nColumns: {
      value: 8,
      label: 'Number of Objects per Row',
      options: [
        { value: 1, label: '1' },
        { value: 4, label: '4' },
        { value: 8, label: '8' },
        { value: 12, label: '12' },
      ],
    },
  },
}];

const interimModelTrainingMethods: Process[] = [{
  type: ProcessType.InterimModelTraining,
  label: 'Retrain',
  id: 'Retrain-16440841',
  inputs: ['features', 'labels', 'model'],
  isAlgorithmic: true,
  isBuiltIn: true,
  isModelBased: false,
  isServerless: false,
  api: `${PROTOCOL}://${IP}:${PORT}/modelUpdated/Retrain`,
}, {
  type: ProcessType.InterimModelTraining,
  label: 'Static',
  id: 'Static-72885436',
  inputs: ['model'],
  isAlgorithmic: true,
  isBuiltIn: true,
  isModelBased: false,
  isServerless: true,
  api: 'Static',
}];

const stoppageAnalysisMethods: Process[] = [{
  type: ProcessType.StoppageAnalysis,
  label: 'AllChecked',
  id: 'AllChecked-46322013',
  inputs: ['labels'],
  isAlgorithmic: true,
  isBuiltIn: true,
  isModelBased: false,
  isServerless: true,
  api: 'AllChecked',
}];

const taskTransformationMethods: Process[] = [{
  type: ProcessType.TaskTransformation,
  label: 'DirectLabeling',
  id: 'DirectLabeling-97377357',
  inputs: ['dataObjects', 'labelTask', 'labelSpace'],
  isAlgorithmic: true,
  isBuiltIn: true,
  isModelBased: false,
  isServerless: true,
  api: 'DirectLabeling',
}];

export const processes: Process[] = [
  ...dataObjectSelectionMethods,
  ...defaultLabelingMethods,
  ...featureExtractionMethods,
  ...interactiveLabelingMethods,
  ...interimModelTrainingMethods,
  ...stoppageAnalysisMethods,
  ...taskTransformationMethods,
];
