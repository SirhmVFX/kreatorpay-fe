export default function CheckboxInput() {
  return (
    <div className="flex items-center gap-2 mt-4">
      <input
        id="accept-terms"
        type="checkbox"
        className="w-4 h-4 accent-indigo-600 cursor-pointer"
        title="Accept Privacy Policy and Terms of Service"
      />
      <label htmlFor="accept-terms" className="text-sm">
        I accept the{' '}
        <a href="#" className="text-blue-600 underline">
          Privacy Policy
        </a>{' '}
        and the{' '}
        <a href="#" className="text-blue-600 underline">
          Terms of Service
        </a>
      </label>
    </div>
  )
}
