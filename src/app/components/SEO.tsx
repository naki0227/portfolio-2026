import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../contexts/LanguageContext';

interface SEOProps {
    title?: string;
    description?: string;
    image?: string;
    path?: string;
}

export function SEO({ title, description, image, path }: SEOProps) {
    const { language } = useLanguage();

    const siteName = "hw24a094 - Portfolio";
    const defaultTitle = language === 'en' ? "hw24a094 - Software Engineer" : "hw24a094 - ソフトウェアエンジニア";
    const defaultDescription = language === 'en'
        ? "Portfolio of hw24a094, showcasing recent software engineering projects and technical stack."
        : "hw24a094のポートフォリオ。最近のプロジェクトや技術スタックについて紹介します。";

    const pageTitle = title ? `${title} | ${siteName}` : defaultTitle;
    const pageDescription = description || defaultDescription;
    const canonicalUrl = `https://your-domain.com${path || ''}`;
    const ogImage = image || "https://your-domain.com/og-image.png";

    return (
        <Helmet htmlAttributes={{ lang: language }}>
            <title>{pageTitle}</title>
            <meta name="description" content={pageDescription} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:title" content={pageTitle} />
            <meta property="og:description" content={pageDescription} />
            <meta property="og:image" content={ogImage} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={canonicalUrl} />
            <meta property="twitter:title" content={pageTitle} />
            <meta property="twitter:description" content={pageDescription} />
            <meta property="twitter:image" content={ogImage} />

            {/* Canonical URL */}
            <link rel="canonical" href={canonicalUrl} />
        </Helmet>
    );
}
