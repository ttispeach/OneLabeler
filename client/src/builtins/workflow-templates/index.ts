// import customTextWithTableMultiple from '@/custom/table-qa/workflow-templates/template';
// import customMI3Block from '@/custom/mi3/workflow-templates/mi3-block';
import customReverseEngineering from '@/custom/reverse-engineering/workflow-templates/template';
import audioClassification from './templates/audio-classification';
import audioTemporalSegmentation from './templates/audio-temporal-segmentation';
import imageClassificationIML from './templates/image-classification-iml';
import imageClassification from './templates/image-classification';
import imageSegmentation from './templates/image-segmentation';
import pointCloudClassification from './templates/point-cloud-classification';
import pointCloudSegmentation from './templates/point-cloud-segmentation';
import textClassification from './templates/text-classification';
import textNamedEntityRecognition from './templates/text-named-entity-recognition';
import videoClassification from './templates/video-classification';
import videoTemporalSegmentation from './templates/video-temporal-segmentation';
import webpageClassification from './templates/webpage-classification';
import youtubeVideoTemporalSegmentation from './templates/youtube-video-temporal-segmentation';

export default [
  audioClassification,
  audioTemporalSegmentation,
  imageClassificationIML,
  imageClassification,
  imageSegmentation,
  pointCloudClassification,
  pointCloudSegmentation,
  textClassification,
  textNamedEntityRecognition,
  videoClassification,
  videoTemporalSegmentation,
  webpageClassification,
  youtubeVideoTemporalSegmentation,
  customReverseEngineering,
  // customMI3Block,
  // customTextWithTableMultiple,
];
