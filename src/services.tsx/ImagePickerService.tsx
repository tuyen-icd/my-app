import * as ImagePicker from "expo-image-picker";

const pickImage = (type) => {
  if (type == 1) {
    return new Promise((resolve, reject) => {
      const pickFromCamera = async () => {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();

        console.log('status :>> ', status);

        if (status !== "granted") {
          reject({ type: "permissionCamera" });
        } else {
          return handlePicking(ImagePicker.launchCameraAsync);
        }
      };

      const handlePicking = async (picker) => {
        try {
          const image = await picker({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 1,
            aspect: [4, 3],
          });
          console.log('camera: ', image)


          if (image && !image.canceled) {
            return resolve(image);
          }

          reject();
        } catch (e) {
          console.log(e);
          reject();
        }
      };

      pickFromCamera();
    });
  } else {
    return new Promise((resolve, reject) => {
      const pickFromGallery = async () => {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
          console.log('status', status);
        if (status !== "granted") {
          reject({ type: "permissionCameraRoll" });
        } else {
          return handlePicking(ImagePicker.launchImageLibraryAsync);
        }
      };

      const handlePicking = async (picker) => {

        console.log('picker :>> ', picker);
        try {
          const image = await picker({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
          });

          console.log('image: ', image)

          if (image && !image.canceled) {
            return resolve(image);
          }

          reject();
        } catch (e) {
          console.log(e);
          reject();
        }
      };

      pickFromGallery();
    });
  }
};

export default pickImage;
