import { StyleSheet } from 'react-native';

export const flex = StyleSheet.create({
  center: {
    alignItem: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  start: {
    alignContent: 'center',
    justifyContent: 'flex-start',
  },
  centerSelf: {
    alignSelf: 'center',
  },
  end: {
    alignContent: 'center',
    justifyContent: 'flex-end',
  },
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
  },
});

export const border = StyleSheet.create({
  roundOn: {
    borderRadius: 8,
  },
  roundOff: {
    borderRadius: 0,
  },
  roundOffTop: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
  roundOffBot: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  on: {
    borderColor: '#333333',
    borderWidth: 0.8,
  },
  off: {
    borderWidth: 0,
  },
  offTop: {
    borderTopWidth: 0,
  },
  offBot: {
    borderBottomWidth: 0,
  },
});

export const button = StyleSheet.create({
  view: {
    ...flex.column,
    ...flex.center,
    ...border.on,
    ...border.roundOn,
    backgroundColor: '#ffffff',
  },
});

export const image = StyleSheet.create({
  view: {
    ...flex.column,
    ...flex.center,
    ...border.off,
    ...border.roundOn,
    backgroundColor: '#ffffff',
  },
  image: {
    ...flex.column,
    ...flex.center,
    ...flex.centerSelf,
    ...border.off,
    ...border.roundOn,
    resizeMode: 'contain',
  },
});

export const text = StyleSheet.create({
  view: {
    ...flex.column,
    ...flex.center,
    ...border.on,
    ...border.roundOn,
    backgroundColor: '#ffffff',
  },
  text: {
    ...flex.column,
    ...flex.center,
    ...flex.centerSelf,
    ...border.off,
    ...border.roundOn,
    height: '94%',
    width: '94%',
    textAlign: 'center',
    color: '#000000',
  },
});
