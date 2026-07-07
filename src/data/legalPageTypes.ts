export type LegalPageSubsection = {
  title: string;
  intro?: string;
  items: string[];
};

export type LegalPageSection = {
  id: string;
  title: string;
  paragraphs?: string[];
  paragraphsAfter?: string[];
  subsections?: LegalPageSubsection[];
  items?: string[];
};

export type LegalPageData = {
  hero: {
    badge: string;
    headline: {
      line1: string;
      gradient: string;
    };
    subtext: string;
  };
  effectiveDate: string;
  intro: string[];
  sections: LegalPageSection[];
};
