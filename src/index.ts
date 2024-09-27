import { fastifyInstance } from './app';

fastifyInstance.listen({ port: 3333 }, () => console.log('Server is running on port 3333'));

//ver sobre biome js