import ChadhavaList from './ChadhavaList';
import HeroChadhava from '../Components/HeroChadhava';

const Chadhava = () => {

  return (
    <>
      <HeroChadhava />
      <div className="bg-gray-50 flex flex-col justify-center items-center">
        <ChadhavaList />
      </div>
    </>
  );
};

export default Chadhava;