import React, { memo, useMemo, useReducer } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ButtonView from '../../components/ButtonView';
import SafeAreaView from '../../components/SafeAreaView';
import useLayout from '../../hooks/useLayout';
import * as styles from '../../styles';

interface Dims {
  height: number;
  width: number;
}

interface State {
  img: Dims;
  txt: Dims;
  cam: Dims;
  lib: Dims;
  rec: Dims;
  sub: Dims;
}

interface ActionType {}

interface Action {
  type: ActionType;
  payload: Dims;
}

const initState: State = {
  img: { height: 0, width: 0 },
  txt: { height: 0, width: 0 },
  cam: { height: 0, width: 0 },
  lib: { height: 0, width: 0 },
  rec: { height: 0, width: 0 },
  sub: { height: 0, width: 0 },
};

const reducer = (state: State, action: Action) => {};

const PropsScreen = () => {
  const navigation = useNavigation();
  const [layoutSafeArea, onLayoutSafeArea] = useLayout();
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <SafeAreaView
      onLayoutView={onLayoutSafeArea}
      styleView={{ ...styles.flex.start }}
    >
      <ButtonView
        styleView={{
          height: 0,
          width: 0,
          ...styles.margin.on,
        }}
        text={'XONG'}
      />
    </SafeAreaView>
  );
};

export default memo(PropsScreen);
