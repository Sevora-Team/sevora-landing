import { getCollection } from 'astro:content';

/** Academy levels in order, with their anchor id on the Academy page and lesson count. */
export async function getLevels() {
  return (await getCollection('academy'))
    .map(({ data }) => data)
    .sort((a, b) => a.order - b.order)
    .map((level) => ({
      ...level,
      id: `nivo-${level.order}`,
      lessonCount: level.modules.reduce((sum, module) => sum + module.lessons.length, 0),
    }));
}

/** The plan that includes a level: levels 0–1 are free, 2–3 come with Starter, 4–5 with Premium. */
export function levelPlan(order: number): 'free' | 'starter' | 'premium' {
  return order < 2 ? 'free' : order < 4 ? 'starter' : 'premium';
}
