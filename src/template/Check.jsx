import React from 'react';
import { Icon } from 'react-materialize';

export default (props) => (
  props.value ? <Icon>check</Icon> : <Icon>clear</Icon>
)