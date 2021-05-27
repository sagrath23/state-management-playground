import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { fetchCharacterById } from '../../../vendors/redux-toolkit';
import { CharacterDetail as CharacterDetailComponent } from '../../character-detail';

export const CharacterDetail: FC = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { character: characterId } = router.query;
  const character = useSelector((state) => state.characterDetail.character);

  useEffect(() => {
    dispatch(fetchCharacterById(characterId as string))
  }, [characterId]);

  return <CharacterDetailComponent {...character} />;
};
