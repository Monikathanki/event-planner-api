module.exports = {
  PORT: process.env.PORT || 8001,
  NODE_ENV: process.env.NODE_ENV || 'development',
  API_TOKEN: process.env.API_TOKEN || 'a92fc0fa-4caa-11eb-ae93-0242ac130002',
  JWT_SECRET: "event-planner-api-jwt",
  DATABASE_URL: process.env.DATABASE_URL || "postgresql://dunder_mifflin@localhost/event_planner",
  TEST_DATABASE_URL: process.env.TEST_DATABASE_URL || "postgresql://dunder_mifflin@localhost/event_planner_test"
}