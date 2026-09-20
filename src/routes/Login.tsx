import { Link } from 'react-router-dom';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Brain } from 'lucide-react';
import { PageContainer } from '@/components/layout/PageContainer';
import { Button } from '@/components/ui/Button';
import toast from 'react-hot-toast';

const loginSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

type LoginForm = z.infer<typeof loginSchema>;

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (_data: LoginForm) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast.success('Login functionality is a placeholder in this demo.');
  };

  return (
    <PageContainer>
      <title>Log In — Neuromed</title>
      <meta name="description" content="Log in to your Neuromed account." />

      <section className="section-padding min-h-[70vh] flex items-center" aria-label="Login form">
        <div className="container-main">
          <div className="max-w-md mx-auto">
            {/* Logo */}
            <div className="text-center mb-8">
              <Link to="/" className="inline-flex items-center gap-2 text-[var(--color-text)] no-underline mb-4">
                <Brain className="h-8 w-8 text-[var(--color-primary)]" aria-hidden="true" />
                <span className="font-display text-2xl font-bold">Neuromed</span>
              </Link>
              <h1 className="text-2xl mb-2">Welcome back</h1>
              <p className="text-sm text-[var(--color-muted)]">
                Log in to access your analysis dashboard
              </p>
            </div>

            {/* Form */}
            <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[var(--radius-lg)] p-6 sm:p-8 shadow-[var(--shadow-sm)] transition-shadow duration-300 hover:shadow-[var(--shadow-md)]">
              <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
                <div>
                  <label htmlFor="login-email" className="form-label">
                    Email address
                  </label>
                  <input
                    id="login-email"
                    type="email"
                    {...register('email')}
                    className="input-field"
                    placeholder="you@hospital.org"
                    aria-invalid={errors.email ? 'true' : 'false'}
                  />
                  {errors.email && (
                    <p className="form-error">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="login-password" className="form-label">
                    Password
                  </label>
                  <input
                    id="login-password"
                    type="password"
                    {...register('password')}
                    className="input-field"
                    placeholder="••••••••"
                    aria-invalid={errors.password ? 'true' : 'false'}
                  />
                  {errors.password && (
                    <p className="form-error">{errors.password.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  loading={isSubmitting}
                  className="w-full"
                >
                  Log In
                </Button>
              </form>
            </div>

            <p className="text-center text-sm text-[var(--color-muted)] mt-6">
              Don&apos;t have an account?{' '}
              <Link to="/signup" className="font-medium">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </section>
    </PageContainer>
  );
}
