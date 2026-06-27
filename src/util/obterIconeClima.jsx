import SolIcon from '../assets/icons/SolIcon';
import ParcialmenteNubladoIcon from '../assets/icons/ParcialmenteNubladoIcon';
import ChuvaIcon from '../assets/icons/ChuvaIcon';

export function obterIconeClima(chuva) {
  if (chuva === 0) {
    return <SolIcon />;
  }

  if (chuva <= 2) {
    return <ParcialmenteNubladoIcon />;
  }

  return <ChuvaIcon />;
}