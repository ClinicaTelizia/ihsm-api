import * as dotenv from 'dotenv';
import { EncryptionTransformer } from 'typeorm-encrypted';

dotenv.config();

export const criptografiaDados = new EncryptionTransformer({
  key: process.env.CHAVE_CRIPTOGRAFIA_BANCO,
  algorithm: 'aes-256-cbc',
  ivLength: 16,
  iv: process.env.IV_CRIPTOGRAFIA_BANCO,
});
