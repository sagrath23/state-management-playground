import { FC, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useRecoilValueLoadable, useRecoilState } from 'recoil';
import { characterDetailSelector, characterDetailState } from '../../../vendors/recoil';
import { CharacterDetail as CharacterDetailComponent } from '../../character-detail';

export const CharacterDetail: FC = () => {
  const router = useRouter();
  const [, setCurrentCharacterId] = useRecoilState(characterDetailState);
  const state = useRecoilValueLoadable(characterDetailSelector);
  const { character: characterId } = router.query;

  useEffect(() => {
    setCurrentCharacterId({ characterId: characterId as string });
  }, [characterId]);

  switch (state.state) {
    case 'hasValue':
      return <CharacterDetailComponent {...state.contents} />;
    case 'loading':
      return <div>Loading...</div>;
    case 'hasError':
      throw state.contents;
  }
};
