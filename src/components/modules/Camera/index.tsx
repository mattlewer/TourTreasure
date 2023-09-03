import {View, StyleSheet, Pressable, Image} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import {Camera, PhotoFile, useCameraDevices} from 'react-native-vision-camera';
import Close from '../../../assets/close.png';

interface CameraViewProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  onReceiveImage: (image: PhotoFile) => void;
}
const CameraView = (props: CameraViewProps) => {
  const camera = useRef<Camera>(null);
  const [ready, setReady] = useState(false);
  const devices = useCameraDevices();
  const device = devices.back;
  const [currentImage, setCurrentImage] = useState<PhotoFile | undefined>();

  useEffect(() => {
    checkPermissions();
  }, []);

  const checkPermissions = async () => {
    const newCameraPermission = await Camera.requestCameraPermission();
    if (!newCameraPermission) {
      setReady(false);
      return;
    }
    setReady(true);
  };

  const takePhoto = async () => {
    if (!camera.current) {
      return;
    }
    const photo = await camera.current.takePhoto();
    setCurrentImage(photo);
    console.log(photo.orientation);
    // props.onReceiveImage(photo);
    // props.setIsOpen(false);
  };

  if (device == null || !ready || !props.isOpen) return null;
  return (
    <>
      {currentImage && (
        <>
          <Pressable
            onPress={() => setCurrentImage(undefined)}
            style={style.closeButtonContainer}>
            <Image source={Close} style={style.closeButton} />
          </Pressable>
          <Image
            source={{uri: 'file://' + currentImage.path}}
            style={style.displayedImage}
          />
        </>
      )}
      {!currentImage && (
        <>
          <Camera
            orientation={'portrait'}
            ref={camera}
            style={[StyleSheet.absoluteFill, {zIndex: 10000}]}
            device={device}
            isActive={true}
            enableHighQualityPhotos
            photo
          />
          <View style={style.cameraBtnContainer}>
            <Pressable style={style.cameraBtn} onPress={takePhoto} />
          </View>
        </>
      )}
    </>
  );
};
const style = StyleSheet.create({
  cameraBtnContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    paddingBottom: 100,
    zIndex: 10000,
  },
  cameraBtn: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'transparent',
    borderWidth: 8,
    borderColor: '#ffffff' + '88',
  },
  displayedImage: {
    width: '100%',
    height: '100%',
    zIndex: 6000,
  },
  closeButtonContainer: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 10000,
  },
  closeButton: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
});
export default CameraView;
