import config from '../config';
import { mapData } from './map-data';

export const loadPages = async (slug = '') => {
  const cleanSlug = slug ? `${slug.replace(/[^a-z0-9-_]/gi, '')}` : '';
  const url = `${config.url}&filters[slug][$eq]=${cleanSlug}`;

  const raw = await fetch(url);
  const json = await raw.json();
  const data = mapData([json.data[0].attributes])[0];

  return data;
};
