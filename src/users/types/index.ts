import { ApiProperty } from '@nestjs/swagger';

export class LoginUserRequest {
  @ApiProperty({ example: 'ivan' })
  username: string;

  @ApiProperty({ example: 'ivan123' })
  password: string;
}

export class LoginUserResponse {
  @ApiProperty({
    example: {
      user: {
        userId: 1,
        username: 'ivan',
        password: 'ivan123',
      },
    },
  })
  user: {
    userId: number;
    userName: string;
    password: string;
  };

  @ApiProperty({ example: 'Logged in' })
  msg: string;
}

export class LogoutUserResponse {
  @ApiProperty({ example: 'session has ended' })
  msg: string;
}

export class LoginCheckResponse {
  @ApiProperty({ example: 1 })
  userId: number;

  @ApiProperty({ example: 'ivan' })
  username: string;

  @ApiProperty({ example: 'ivan@gmail.com' })
  email: string;
}

export class SignUpResponse {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'ivan' })
  username: string;

  @ApiProperty({
    example: '$2a$10$yoXH34VFnEPh6QdST1l.bO1oQ/aTbKJ7YK14T2pXV',
  })
  password: string;

  @ApiProperty({ example: 'ivan@gmail.com' })
  email: string;

  @ApiProperty({ example: '2024-06-10T07:23:14.385Z' })
  updatedAt: string;

  @ApiProperty({ example: '2024-06-10T07:23:14.385Z' })
  createdAt: string;
}
