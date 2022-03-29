import { atom, selector } from 'recoil';

export const familyState = atom({
  key: 'familyState',
  default: ['Jacques', 'Jean'],
});

export const getFirstKid = selector({
  key: 'getFirstKid',
  get: ({ get }) => {
    const family = get(familyState);
    return family[0];
  },
});

// Example usage

// index.js
// const [bravoureFam, setBravoureFam] = useRecoilState(familyState);
// const firstKid = useRecoilValue(getFirstKid);

// useEffect(() => {
//   const restOfTheFamily = api.getRestOfTheFamily()
//   setBravoureFam([...bravoureFam, ...restOfTheFamily]);
// }, []);

// return (
//   <div>
//   <h1>{firstKid}</h1>
//   <p>{bravoureFam.map(...)}</p>
//   </div>
// )
