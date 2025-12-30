import type { Schema, Struct } from '@strapi/strapi';

export interface UiLink extends Struct.ComponentSchema {
  collectionName: 'components_ui_links';
  info: {
    displayName: 'Link';
    icon: 'link';
  };
  attributes: {
    external: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    page: Schema.Attribute.Relation<'oneToOne', 'api::page.page'>;
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface UiLinkList extends Struct.ComponentSchema {
  collectionName: 'components_ui_link_lists';
  info: {
    displayName: 'Link List';
    icon: 'bulletList';
  };
  attributes: {
    links: Schema.Attribute.Component<'ui.link', true>;
    title: Schema.Attribute.String;
  };
}

export interface UiRichText extends Struct.ComponentSchema {
  collectionName: 'components_ui_rich_texts';
  info: {
    displayName: 'Rich Text';
    icon: 'pencil';
  };
  attributes: {
    imageAlignment: Schema.Attribute.Enumeration<['center', 'left', 'right']>;
    richText: Schema.Attribute.Blocks;
  };
}

export interface UtilitySeo extends Struct.ComponentSchema {
  collectionName: 'components_utility_seos';
  info: {
    displayName: 'SEO';
    icon: 'information';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    metaDescription: Schema.Attribute.String;
    pageTitle: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'ui.link': UiLink;
      'ui.link-list': UiLinkList;
      'ui.rich-text': UiRichText;
      'utility.seo': UtilitySeo;
    }
  }
}
