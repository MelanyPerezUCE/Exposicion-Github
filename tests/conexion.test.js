import { jest } from '@jest/globals';

/* ===========================
   MOCK (ES MODULES)
=========================== */
jest.unstable_mockModule('../Database/conectar.js', () => ({
  default: {
    query: jest.fn(),
  },
}));

/* ===========================
   IMPORTS DESPUÉS DEL MOCK
=========================== */
const pool = (await import('../Database/conectar.js')).default;
const {
  Crear,
  Leer,
  Leer_id,
  Actualizar,
  Eliminar,
} = await import('../Servicios/crud_mysql.js');

/* ===========================
   TESTS
=========================== */
describe('CRUD Operations', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  /* ========= CREAR ========= */
  test('Crear → OK', async () => {
    pool.query.mockResolvedValue([{ insertId: 1 }]);

    const result = await Crear(
      { body: { nombre: 'John', edad: 30, email: 'john@example.com' } },
      {}
    );

    expect(result.Status).toBe(200);
  });

  test('Crear → ERROR BD', async () => {
    pool.query.mockRejectedValue(new Error('DB error'));

    const result = await Crear(
      { body: { nombre: 'John', edad: 30, email: 'john@example.com' } },
      {}
    );

    expect(result.Status).toBe(400);
    expect(result.Estado).toBe(false);
  });

  /* ========= LEER ========= */
  test('Leer → OK', async () => {
    pool.query.mockResolvedValue([[{ id: 1 }]]);
    const result = await Leer({}, {});
    expect(result.Status).toBe(200);
  });

  test('Leer → ERROR BD', async () => {
    pool.query.mockRejectedValue(new Error('DB error'));
    const result = await Leer({}, {});
    expect(result.Status).toBe(400);
    expect(result.Estado).toBe(false);
  });

  /* ========= LEER POR ID ========= */
  test('Leer_id → OK', async () => {
    pool.query.mockResolvedValue([
      [{ id: 1, nombre: 'John', edad: 30, email: 'a@a.com' }],
    ]);

    const result = await Leer_id({ params: { id: 1 } }, {});
    expect(result.Status).toBe(200);
  });

  test('Leer_id → NO ENCONTRADO', async () => {
    pool.query.mockResolvedValue([[]]);

    const result = await Leer_id({ params: { id: 99 } }, {});
    expect(result.Status).toBe(400);
    expect(result.Estado).toBe(false);
  });

  test('Leer_id → ERROR BD', async () => {
    pool.query.mockRejectedValue(new Error('DB error'));

    const result = await Leer_id({ params: { id: 1 } }, {});
    expect(result.Status).toBe(400);
  });

  /* ========= ACTUALIZAR ========= */
  test('Actualizar → OK', async () => {
    pool.query.mockResolvedValue([{ affectedRows: 1 }]);

    const result = await Actualizar(
      {
        params: { id: 1 },
        body: { nombre: 'Jane', edad: 25, email: 'j@j.com' },
      },
      {}
    );

    expect(result.Status).toBe(200);
  });

  test('Actualizar → NO ENCONTRADO', async () => {
    pool.query.mockResolvedValue([{ affectedRows: 0 }]);

    const result = await Actualizar(
      {
        params: { id: 99 },
        body: { nombre: 'Jane', edad: 25, email: 'j@j.com' },
      },
      {}
    );

    expect(result.Status).toBe(400);
    expect(result.Estado).toBe(false);
  });

  test('Actualizar → ERROR BD', async () => {
    pool.query.mockRejectedValue(new Error('DB error'));

    const result = await Actualizar(
      {
        params: { id: 1 },
        body: { nombre: 'Jane', edad: 25, email: 'j@j.com' },
      },
      {}
    );

    expect(result.Status).toBe(400);
  });

  /* ========= ELIMINAR ========= */
  test('Eliminar → OK', async () => {
    pool.query.mockResolvedValue([{ affectedRows: 1 }]);

    const result = await Eliminar({ params: { id: 1 } }, {});
    expect(result.Status).toBe(200);
  });

  test('Eliminar → NO ENCONTRADO', async () => {
    pool.query.mockResolvedValue([{ affectedRows: 0 }]);

    const result = await Eliminar({ params: { id: 99 } }, {});
    expect(result.Status).toBe(400);
    expect(result.Estado).toBe(false);
  });

  test('Eliminar → ERROR BD', async () => {
    pool.query.mockRejectedValue(new Error('DB error'));

    const result = await Eliminar({ params: { id: 1 } }, {});
    expect(result.Status).toBe(400);
  });
});
