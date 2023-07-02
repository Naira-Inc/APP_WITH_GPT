import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://mspoopzcokvrpfishvbc.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1zcG9vcHpjb2t2cnBmaXNodmJjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODgyOTY4NDQsImV4cCI6MjAwMzg3Mjg0NH0.ulmRt6wZCY1ZeTZZNQ6-8HgXW5ZgXma-sY8c4-94wKw"
);
