import type { Schema, Attribute } from '@strapi/strapi';

export interface AboutSectionAboutSection extends Schema.Component {
  collectionName: 'components_about_section_about_sections';
  info: {
    displayName: 'about-section';
    icon: 'quote';
    description: '';
  };
  attributes: {
    h3: Attribute.String;
    content: Attribute.String;
    test: Attribute.RichText;
  };
}

export interface PropagandaAction extends Schema.Component {
  collectionName: 'components_propaganda_actions';
  info: {
    displayName: 'action';
    icon: 'apps';
    description: '';
  };
  attributes: {
    titre_gauche: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Propaganda, etincelles...'>;
    sous_titre_droite: Attribute.Text &
      Attribute.DefaultTo<'description ou "tags"'>;
    h3_droite: Attribute.Text &
      Attribute.DefaultTo<'Cr\u00E9er de l\u2019engagement autour de la cause \u2028de celleux qui portent le changement'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'about-section.about-section': AboutSectionAboutSection;
      'propaganda.action': PropagandaAction;
    }
  }
}
