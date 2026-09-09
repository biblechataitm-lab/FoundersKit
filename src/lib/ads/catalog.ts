import type { Product, ProductPage, GetProductsOptions, SiteConfig } from './types';
import { request, mockMode } from './client';

const MOCK_PRODUCTS: Product[] = [
  {
    "id": "fk-1",
    "title": "Stripe Atlas",
    "tagline": "Incorporate in Delaware, open a US bank account, and issue founder stock in days",
    "link": "https://stripe.com/atlas",
    "category": "Developer Tools",
    "upvotes": 430,
    "tags": [
      "incorporation",
      "legal",
      "startup"
    ],
    "techStack": [
      "Stripe",
      "Legaltech"
    ],
    "maker": {
      "name": "Stripe Team",
      "avatar": "https://placehold.co/64x64/cc785c/ffffff?text=SA"
    }
  },
  {
    "id": "fk-2",
    "title": "Carta Equity",
    "tagline": "The gold standard platform for startup cap tables, 409A valuations, and equity compensation",
    "link": "https://carta.com",
    "category": "Productivity",
    "upvotes": 410,
    "tags": [
      "cap-table",
      "equity",
      "finance"
    ],
    "techStack": [
      "Next.js",
      "PostgreSQL"
    ],
    "maker": {
      "name": "Henry Ward",
      "avatar": "https://placehold.co/64x64/1e3a8a/ffffff?text=CW"
    }
  },
  {
    "id": "fk-3",
    "title": "DocSend",
    "tagline": "Secure document sharing and pitch deck analytics with real-time slide-by-slide investor tracking",
    "link": "https://docsend.com",
    "category": "Productivity",
    "upvotes": 370,
    "tags": [
      "pitch-deck",
      "fundraising",
      "analytics"
    ],
    "techStack": [
      "Dropbox",
      "Analytics"
    ],
    "maker": {
      "name": "Russ Heddleston",
      "avatar": "https://placehold.co/64x64/10b981/ffffff?text=DS"
    }
  },
  {
    "id": "fk-4",
    "title": "Linear",
    "tagline": "The issue tracking and product planning tool built specifically for high-velocity startup teams",
    "link": "https://linear.app",
    "category": "Developer Tools",
    "upvotes": 350,
    "tags": [
      "product",
      "issues",
      "velocity"
    ],
    "techStack": [
      "React",
      "Sync Engine",
      "GraphQL"
    ],
    "maker": {
      "name": "Karri Saarinen",
      "avatar": "https://placehold.co/64x64/6366f1/ffffff?text=LN"
    }
  },
  {
    "id": "fk-5",
    "title": "Brex Cash",
    "tagline": "Corporate credit cards, global payments, and venture treasury management for tech startups",
    "link": "https://brex.com",
    "category": "Automation",
    "upvotes": 320,
    "tags": [
      "banking",
      "treasury",
      "cards"
    ],
    "techStack": [
      "Fintech",
      "AWS"
    ],
    "maker": {
      "name": "Pedro Franceschi",
      "avatar": "https://placehold.co/64x64/f59e0b/ffffff?text=BX"
    }
  },
  {
    "id": "fk-6",
    "title": "Mercury Bank",
    "tagline": "Modern banking designed for startups with FDIC insurance, wire automations, and venture debt",
    "link": "https://mercury.com",
    "category": "Automation",
    "upvotes": 310,
    "tags": [
      "banking",
      "venture",
      "finance"
    ],
    "techStack": [
      "Haskell",
      "React"
    ],
    "maker": {
      "name": "Immad Akhund",
      "avatar": "https://placehold.co/64x64/14b8a6/ffffff?text=MB"
    }
  }
];

const MOCK_SITE: SiteConfig = {
  "key": "founderskit",
  "name": "FoundersKit",
  "domain": "founderskit.com",
  "category": "startups",
  "tags": [
    "startups",
    "founders",
    "business",
    "saas",
    "growth"
  ],
  "status": "live",
  "statusMessage": null,
  "slots": [
    {
      "key": "sidebar-1",
      "slotType": "sidebar",
      "format": "native"
    }
  ]
};

export async function getSiteConfig(timeoutMs?: number): Promise<SiteConfig | null> {
  if (mockMode()) return MOCK_SITE;
  const data = await request<{ site: SiteConfig }>('/api/v1/site', {}, timeoutMs, 'getSiteConfig');
  return data?.site ?? MOCK_SITE;
}

export async function getProducts(options: GetProductsOptions = {}): Promise<ProductPage> {
  const mock = mockMode();
  if (mock) {
    if (mock === 'empty') return { products: [], nextCursor: null, appliedTags: [] };
    let filtered = [...MOCK_PRODUCTS];
    if (options.category) {
      filtered = filtered.filter((p) => p.category.toLowerCase() === options.category?.toLowerCase());
    }
    if (options.q) {
      const q = options.q.toLowerCase();
      filtered = filtered.filter((p) => p.title.toLowerCase().includes(q) || p.tagline.toLowerCase().includes(q));
    }
    const sorted = options.sort === 'top' ? filtered.sort((a, b) => b.upvotes - a.upvotes) : filtered;
    return {
      products: sorted.slice(0, options.limit ?? sorted.length),
      nextCursor: null,
      appliedTags: MOCK_SITE.tags,
    };
  }

  const data = await request<ProductPage>(
    '/api/v1/catalog/products',
    {
      tags: options.tags?.join(','),
      category: options.category,
      q: options.q,
      since: options.since,
      sort: options.sort,
      limit: options.limit ? String(options.limit) : undefined,
      cursor: options.cursor,
    },
    options.timeoutMs,
    'getProducts',
  );

  if (!data || !data.products || data.products.length === 0) {
    let filtered = [...MOCK_PRODUCTS];
    if (options.category) {
      filtered = filtered.filter((p) => p.category.toLowerCase() === options.category?.toLowerCase());
    }
    if (options.q) {
      const q = options.q.toLowerCase();
      filtered = filtered.filter((p) => p.title.toLowerCase().includes(q) || p.tagline.toLowerCase().includes(q));
    }
    const sorted =
      options.sort === 'top' ? filtered.sort((a, b) => b.upvotes - a.upvotes) : filtered;
    return {
      products: sorted.slice(0, options.limit ?? sorted.length),
      nextCursor: null,
      appliedTags: MOCK_SITE.tags,
    };
  }

  return data;
}

export async function getProduct(id: string, timeoutMs?: number): Promise<Product | null> {
  if (mockMode()) return MOCK_PRODUCTS.find((p) => p.id === id) ?? MOCK_PRODUCTS[0];

  const data = await request<{ product: Product }>(
    `/api/v1/catalog/products/${encodeURIComponent(id)}`,
    {},
    timeoutMs,
    'getProduct',
  );
  return data?.product ?? MOCK_PRODUCTS.find((p) => p.id === id) ?? MOCK_PRODUCTS[0];
}
