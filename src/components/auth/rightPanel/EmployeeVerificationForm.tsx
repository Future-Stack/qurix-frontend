import { Shield, ArrowRight, CheckCircle2 } from 'lucide-react';
import React from 'react';
import { useRouter } from 'next/navigation';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const employeeVerificationSchema = z.object({
  employeeId: z.string().min(1, 'Employee ID is required'),
});

type EmployeeVerificationValues = z.infer<typeof employeeVerificationSchema>;

export default function EmployeeVerificationForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<EmployeeVerificationValues>({
    resolver: zodResolver(employeeVerificationSchema),
    defaultValues: {
      employeeId: 'EMP001',
    },
  });

  const onSubmit = (data: EmployeeVerificationValues) => {
    console.log('Employee verification attempt:', data);
    // Proceed to login or next step on valid form submission
    router.push('/login');
  };

  const employeeIdValue = watch('employeeId');
  const isVerified = employeeIdValue && employeeIdValue.length >= 3;

  return (
    <>
      <div className="mb-8">
        <div className="inline-flex bg-[#00AB0C1A] p-3 rounded-xl border border-green-100">
          <Shield className="w-5 h-5 text-green-600" />
        </div>
      </div>

      <h2 className="text-2xl font-bold text-[#101828] mb-2.5">Employee Verification</h2>
      <p className="text-sm text-gray-500 mb-4">Only verified employees can register. Enter your Employee ID to continue.</p>

      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-1.5">
          <label className="text-sm font-semibold text-[#101828]">Employee ID</label>
          <div className="relative mt-1.5">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-green-500 font-medium">
              #
            </div>
            <input
              type="text"
              {...register('employeeId')}
              className={`w-full px-3 py-2 text-xs lg:text-sm rounded-xl border focus:ring-1 outline-none transition-all pl-10 pr-11 bg-[#F0FDF4] text-[#0F172A] cursor-pointer ${
                errors.employeeId
                  ? 'border-red-500 focus:border-red-600 focus:ring-red-600'
                  : 'border-[#22C55E] focus:border-green-600 focus:ring-green-600'
              }`}
            />
            {isVerified && !errors.employeeId && (
              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-green-500">
                <CheckCircle2 className="w-4 h-4" />
              </div>
            )}
          </div>
          {errors.employeeId && (
            <p className="text-xs text-red-500 mt-1">{errors.employeeId.message}</p>
          )}
          {isVerified && !errors.employeeId && (
            <p className="text-xs font-medium text-green-600 flex items-center gap-1 pt-1">
              <CheckCircle2 className="w-3 h-3" />
              Employee verified. You may proceed.
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-[#06530B] hover:bg-[#05290b] text-white py-3 px-3 lg:py-3.5 lg:px-4 rounded-xl text-xs lg:text-[15px] font-bold flex items-center justify-center gap-2 transition-all mt-2 cursor-pointer"
        >
          Continue to Login
          <ArrowRight className="w-4 h-4" />
        </button>
      </form>
      <hr className='mt-5 border-[#00AB0C0D]' />

      <div className="mt-4 text-center">
        <p className="text-[10px] lg:text-xs font-medium text-[#94A3B8]">
          Demo IDs: FVR-5023, EMP001
        </p>
      </div>
    </>
  );
}
