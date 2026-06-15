-- Create website_orders Table
CREATE TABLE website_orders (
  order_id VARCHAR(255) PRIMARY KEY,
  buyer_name VARCHAR(255) NOT NULL,
  buyer_email VARCHAR(255),
  buyer_wa VARCHAR(255),
  buyer_notes TEXT,
  service_id VARCHAR(255) NOT NULL,
  service_name VARCHAR(255) NOT NULL,
  price NUMERIC(12, 2) NOT NULL,
  snap_token VARCHAR(255),
  snap_redirect_url TEXT,
  status VARCHAR(50) DEFAULT 'pending',
  payment_type VARCHAR(100),
  webhook_payload JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE website_orders ENABLE ROW LEVEL SECURITY;

-- Enable Public Policies for API Inserts, Selects, and Updates
CREATE POLICY "Allow public insert" ON website_orders FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public select" ON website_orders FOR SELECT USING (true);
CREATE POLICY "Allow public update" ON website_orders FOR UPDATE USING (true) WITH CHECK (true);
