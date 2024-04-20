import { signIn } from '../../../auth';
import LoginForm from '@/app/ui/login-form';
 
export default function LoginPage() {
  return (
    <main className="flex items-center justify-center">
      <div className="absolute flex w-11/12 gap-12 items-center max-w-[400px] h-1/3 md:h-72 flex-col rounded-xl border-solid border-slate-200 border text-center bottom-0 top-0 m-auto">
        <div className="flex h-20 w-full items-center rounded-t-xl rounded-b-none bg-blue-500 p-3 md:h-36">
          <div className="w-full text-white">
            H4 Training Team Notes
          </div>
        </div>
        <form
          action={async () => {
            "use server"
            await signIn("google", ({redirectTo: "http://localhost:3000/dashboard"}))
          }}
        >
          <button type='submit'>
            <img src="web_neutral_rd_SI.svg" />
          </button>
        </form>
      </div>
    </main>
  );
}