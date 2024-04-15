"use client"
import { lusitana } from '@/app/ui/fonts';
import {
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { Button } from './button';
import { useFormState, useFormStatus } from 'react-dom';
import { authenticate } from '../lib/actions';
import { signIn } from '../../../auth';

export default function LoginForm() {
  // const [errorMessage, dispatch] = useFormState(authenticate, undefined)

  return (
    <form action={authenticate} className="space-y-3">
      <Button className="mt-4 w-full">
        Log in with Google<ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
      </Button>
    </form>
  );
}

// function LoginButton() {
//   const { pending } = useFormStatus()
//   return (
//     <Button className="mt-4 w-full" aria-disabled={pending}>
//       Log in with Google<ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
//     </Button>
//   );
// }
