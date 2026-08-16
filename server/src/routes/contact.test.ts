import { describe, it, expect, vi, beforeEach } from 'vitest';
import request from 'supertest';
import app from '../index';

// mock Resend
const sendMock = vi.hoisted(() => vi.fn());
vi.mock('resend', () => ({
  Resend: vi.fn().mockImplementation(function () {
    return { emails: { send: sendMock } };
  }),
}));

describe('POST /contact', () => {
  // Need to reset mock call history before each test
  beforeEach(() => {
    sendMock.mockClear();
  });

  it('returns 200 for valid input', async () => {
    //mock data with resend
    sendMock.mockResolvedValueOnce({ data: { id: 'abc' }, error: null });

    // send request
    const res = await request(app).post('/contact').send({ name: 'Maya', email: 'test@example.com', message: 'This is a valid message' });

    // check for success response
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ success: true, data: { id: 'abc' } });
  });

  it('returns 400 for invalid input', async () => {
    const res = await request(app).post('/contact').send({ name: '', email: 'test@example.com', message: 'This is an invalid message' });

    expect(res.status).toBe(400);
    expect(res.body).toEqual({ success: false, error: 'Invalid contact form input' });
    expect(sendMock).not.toHaveBeenCalled();
  });

  it('returns 500 when email sending fails', async () => {
    sendMock.mockResolvedValueOnce({ data: null, error: { message: 'failed to send' } });

    const res = await request(app).post('/contact').send({ name: 'Maya', email: 'test@example.com', message: 'This is an valid message' });

    expect(res.status).toBe(500);
    expect(res.body.success).toBe(false);
  });
});
