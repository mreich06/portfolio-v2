import { Request, Response, NextFunction } from 'express';

const WINDOW_MS = 60_000; // 1 minute
const MAX_REQUESTS = 5;

const requestCounts = new Map<string, { count: number; resetAt: number }>();

const rateLimit = (req: Request, res: Response, next: NextFunction) => {
  const ip = req?.ip ?? 'unknown';
  const now = Date.now();
  const entry = requestCounts.get(ip);

  // first entry or window expired - start fresh
  if (!entry || now > entry.resetAt) {
    requestCounts.set(ip, { count: 0, resetAt: now + WINDOW_MS });
    return next();
  }

  if (entry.count >= MAX_REQUESTS) {
    return res.status(429).json({ success: false, error: 'Too many requests, try again later' });
  }
  entry.count++;
  next();
};

export default rateLimit;
