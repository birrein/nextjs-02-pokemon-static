import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { Grid, Card, Text, Button, Container, Image } from '@nextui-org/react';
import { pokeApi } from '../../api';
import { Layout } from '../../components/layouts';
import { IPokemon, PokemonItem } from '../../interfaces';


export const FavoritesPage: NextPage = (Props) => {
  return (
    <Layout title="Favoritos">
      <h1>Favoritos</h1>
    </Layout>
  );
};

export default FavoritesPage;
