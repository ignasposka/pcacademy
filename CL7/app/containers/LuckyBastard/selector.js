import { createSelector } from 'reselect';

const selectLuckyBastardPage = state => state.toJS().luckyBastard;

export default function makeSelectorLuckyBastard() {
  return createSelector(selectLuckyBastardPage, s => s);
}
