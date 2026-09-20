import { Link } from 'react-router-dom';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Brain } from 'lucide-react';
import { PageContainer } from '@/components/layout/PageContainer';
import { Button } from '@/components/ui/Button';
import toast from 'react-hot-toast';

const signupSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  role: z.string().min(1, 'Please select your role'),
});

type SignupForm = z.infer<typeof signupSchema>;

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupForm>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (_data: SignupForm) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast.success('Signup functionality is a placeholder in this demo.');
  };

  return (
    <PageContainer>
      <title>Sign Up — Neuromed</title>
      <meta name="description" content="Create your Neuromed account to start analyzing brain MRI scans." />

      <section className="section-padding min-h-[70vh] flex items-center" aria-label="Sign up form">
        <div className="container-main">
          <div className="max-w-md mx-auto">
            {/* Logo */}
            <div className="text-center mb-8">
              <Link to="/" className="inline-flex items-center gap-2 text-[var(--color-text)] no-underline mb-4">
                <Brain className="h-8 w-8 text-[var(--color-primary)]" aria-hidden="true" />
                <span className="font-display text-2xl font-bold">Neuromed</span>
              </Link>
              <h1 className="text-2xl mb-2">Create your account</h1>
              <p className="text-sm text-[var(--color-muted)]">
                Join Neuromed to start analyzing brain MRI scans
              </p>
            </div>

            {/* Form */}
            <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[var(--radius-lg)] p-6 sm:p-8 shadow-[var(--shadow-sm)] transition-shadow duration-300 hover:shadow-[var(--shadow-md)]">
              <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
                <div>
                  <label htmlFor="signup-name" className="form-label">
                    Full name
                  </label>
                  <input
                    id="signup-name"
                    type="text"
                    {...register('name')}
                    className="input-field"
                    placeholder="Dr. Jane Smith"
                    aria-invalid={errors.name ? 'true' : 'false'}
                  />
                  {errors.name && (
                    <p className="form-error">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="signup-email" className="form-label">
                    Email address
                  </label>
                  <input
                    id="signup-email"
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
                  <label htmlFor="signup-password" className="form-label">
                    Password
                  </label>
                  <input
                    id="signup-password"
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

                <div>
                  <label htmlFor="signup-role" className="form-label">
                    Role
                  </label>
                  <select
                    id="signup-role"
                    {...register('role')}
                    className="input-field cursor-pointer"
                    aria-invalid={errors.role ? 'true' : 'false'}
                  >
                    <option value="">Select your role</option>
                    <option value="radiologist">Radiologist</option>
                    <option value="neurologist">Neurologist</option>
                    <option value="researcher">Researcher</option>
                    <option value="hospital-admin">Hospital Administrator</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.role && (
                    <p className="form-error">{errors.role.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  loading={isSubmitting}
                  className="w-full"
                >
                  Create Account
                </Button>
              </form>
            </div>

            <p className="text-center text-sm text-[var(--color-muted)] mt-6">
              Already have an account?{' '}
              <Link to="/login" className="font-medium">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </section>
    </PageContainer>
  );
}
