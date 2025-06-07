import { config } from "dotenv";

config({ path: `.env.${process.env.NODE_ENV || "dev"}.local` });

export const {
  PORT,
  SERVER_URL,
  NODE_ENV,
  DB_URI,
  JWT_SECRET,
  JWT_EXPIRES_IN,
  ARCJET_ENV,
  ARCJET_KEY,
  QSTASH_URL,
  QSTASH_TOKEN,
  EMAIL_PASSWORD,
} = process.env;

/**
 * 
 * 
 server {
        listen 80 default_server;
        server_name localhost;

        root /var/www/html;

        index index.html index.htm;


        location / {
                proxy_pass http://127.0.0.1:5500;
                proxy_set_header Host $host;
                proxy_set_header X-Real-IP $remote_addr;
                proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
                proxy_set_header X-Forwarded-Proto $scheme;
        }

}
 * 
 */
