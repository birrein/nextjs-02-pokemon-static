import { FC } from 'react';
import { useRouter } from 'next/router';
import { Card, Grid, Row, Text } from '@nextui-org/react';
import { PokemonItem } from '../../interfaces';

interface Props {
  pokemon: PokemonItem;
}

export const PokemonCard: FC<Props> = ({ pokemon: { id, name, img } }) => {
  const router = useRouter();
  const onClick = () => {
    router.push(`/pokemon/${id}`);
  };
  return (
    <Grid xs={6} sm={3} md={2} xl={1} key={id}>
      <Card isHoverable isPressable onClick={onClick}>
        <Card.Body css={{ p: 1 }}>
          <Card.Image src={img} alt={name} width="100%" height={140} />
        </Card.Body>
        <Card.Footer>
          <Row justify="space-between">
            <Text transform="capitalize">{name}</Text>
            <Text>#{id}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};
