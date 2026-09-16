import { Catch, ArgumentsHost, Logger } from '@nestjs/common';
import { GqlExceptionFilter } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { GraphQLError } from 'graphql';

@Catch(
  Prisma.PrismaClientKnownRequestError,
  Prisma.PrismaClientInitializationError,
  Prisma.PrismaClientRustPanicError,
  Prisma.PrismaClientUnknownRequestError,
  Prisma.PrismaClientValidationError,
)
export class PrismaClientExceptionFilter implements GqlExceptionFilter {
  private readonly logger = new Logger(PrismaClientExceptionFilter.name);

  catch(exception: any) {
    this.logger.error(`Возникла ошибка БД: ${exception.message}`, exception.stack);

    return new GraphQLError('Внутренняя ошибка сервера', {
      extensions: {
        code: 'INTERNAL_SERVER_ERROR',
      },
    });
  }
}
