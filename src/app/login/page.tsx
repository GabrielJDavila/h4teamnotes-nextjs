import { signIn } from '../../../auth';
import LoginForm from '@/app/ui/login-form';
 
export default function LoginPage() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="absolute mx-auto flex w-full items-center max-w-[400px] flex-col space-y-2.5 md:-mt-32 rounded-xl border-solid border-slate-200 border text-center bottom-0 top-0 h-1/2 m-auto">
        <div className="flex h-20 w-full items-end rounded-lg bg-blue-500 p-3 md:h-36">
          <div className="w-32 text-white md:w-36">
            H4 Training
          </div>
        </div>
        <form
          action={async () => {
            "use server"
            await signIn("google", ({redirectTo: "http://localhost:3000/dashboard"}))
          }}
        >
          <button type='submit'>
            <img src="web_neutral_rd_SU.svg" />
          </button>
        </form>
      </div>
    </main>
  );
}