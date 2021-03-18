export function seo(data = {}) {
    data.title = data.title + ' | ERP' || 'ERP ';
    data.metaDescription = data.metaDescription + ' | ERP' || 'ERP ';
  
    document.title = data.title;
    document.querySelector('meta[name="description"]').setAttribute('content', data.metaDescription);
  }