import { App } from '../lib/app';
import * as DbPlugins from './db';
import * as NotePlugins from './note';

export const pluginFactory = {
  db(app: App, id: string, engine: string, hooks: any) {
    switch (engine) {
      case 'presto':
        return new DbPlugins.PrestoDbPlugin(app, id, hooks);
      case 'athena':
        return new DbPlugins.AthenaDbPlugin(app, id, hooks);
      case 'jdbc':
        return new DbPlugins.JdbcDbPlugin(app, id, hooks);
      default:
        throw new Error(`No definition for "${engine}" engine db plugin`);
    }
  },

  note(app: App, id: string, engine: string, hooks: any) {
    switch (engine) {
      case 'presto':
        return new NotePlugins.PrestoNotePlugin(app, id, hooks);
      case 'athena':
        return new NotePlugins.AthenaNotePlugin(app, id, hooks);
      case 'jdbc':
        return new NotePlugins.JdbcNotePlugin(app, id, hooks);
      case 'rupert':
        return new NotePlugins.RupertNotePlugin(app, id, hooks);
      default:
        throw new Error(`No definition for "${engine}" engine note plugin`);
    }
  }
}