import { NextPage, GetStaticProps } from 'next';
import { Grid } from '@nextui-org/react';
import { pokeApi } from '../api';
import { Layout } from '../components/layouts';
import { PokemonItem, PokemonListResponse } from '../interfaces';
import { PokemonCard } from '../components/pokemon';

interface Props {
  pokemons: PokemonItem[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout title="Listado de Pókemons">
      <Grid.Container gap={2} justify="flex-start">
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </Grid.Container>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');

  const pokemons: PokemonItem[] = data.results.map((pokemon) => ({
    ...pokemon,
    id: parseInt(pokemon.url.split('/')[6]),
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      pokemon.url.split('/')[6]
    }.svg`,
  }));

  return {
    props: {
      pokemons,
    },
  };
};

export default HomePage;
