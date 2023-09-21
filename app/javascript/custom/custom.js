import * as FilePond from 'filepond';

// Import the plugin code
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';

// // Import the plugin styles
// import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.scss';

// Register the plugin
FilePond.registerPlugin(FilePondPluginImagePreview);

// Get a reference to the file input element
const inputElement = document.querySelector('#post-images');

// Create a FilePond instance
const pond = FilePond.create(inputElement, {
  credits: {},
  storeAsFile: true,
  allowMultiple: true,
  allowReorder: true,
});
