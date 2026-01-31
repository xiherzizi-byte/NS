-- ==========================================
-- NONGKRONG SEHAT DATABASE SCHEMA
-- Supabase PostgreSQL
-- ==========================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ==========================================
-- TABLE: presenters
-- ==========================================
CREATE TABLE IF NOT EXISTS presenters (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    role VARCHAR(100) DEFAULT 'presenter',
    expertise VARCHAR(255),
    avatar_color VARCHAR(7) DEFAULT '#1e4d40',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ==========================================
-- TABLE: materials (Pengetahuan)
-- ==========================================
CREATE TABLE IF NOT EXISTS materials (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    presenter_id UUID REFERENCES presenters(id) ON DELETE CASCADE,
    title VARCHAR(500) NOT NULL,
    category VARCHAR(100) DEFAULT 'general',
    content TEXT,
    date DATE DEFAULT CURRENT_DATE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ==========================================
-- TABLE: schedules
-- ==========================================
CREATE TABLE IF NOT EXISTS schedules (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    presenter_id UUID REFERENCES presenters(id) ON DELETE SET NULL,
    title VARCHAR(500) NOT NULL,
    type VARCHAR(50) DEFAULT 'regular', -- 'regular', 'jalsah', 'workshop', etc.
    location VARCHAR(255),
    date DATE NOT NULL,
    time TIME,
    status VARCHAR(20) DEFAULT 'upcoming', -- 'upcoming', 'completed', 'cancelled'
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ==========================================
-- INDEXES for better performance
-- ==========================================
CREATE INDEX idx_materials_presenter ON materials(presenter_id);
CREATE INDEX idx_materials_date ON materials(date DESC);
CREATE INDEX idx_schedules_presenter ON schedules(presenter_id);
CREATE INDEX idx_schedules_date ON schedules(date DESC);
CREATE INDEX idx_schedules_status ON schedules(status);

-- ==========================================
-- TRIGGERS for updated_at
-- ==========================================
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_presenters_updated_at BEFORE UPDATE ON presenters
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_materials_updated_at BEFORE UPDATE ON materials
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_schedules_updated_at BEFORE UPDATE ON schedules
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- ==========================================
-- Row Level Security (RLS) - Optional
-- ==========================================
-- Enable RLS (uncomment when authentication is ready)
-- ALTER TABLE presenters ENABLE ROW LEVEL SECURITY;
-- ALTER TABLE materials ENABLE ROW LEVEL SECURITY;
-- ALTER TABLE schedules ENABLE ROW LEVEL SECURITY;

-- Public read access (for now)
-- CREATE POLICY "Allow public read access" ON presenters FOR SELECT USING (true);
-- CREATE POLICY "Allow public read access" ON materials FOR SELECT USING (true);
-- CREATE POLICY "Allow public read access" ON schedules FOR SELECT USING (true);
