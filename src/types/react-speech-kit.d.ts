declare module "react-speech-kit" {
  export interface UseSpeechRecognitionOptions {
    onResult?: (text: string) => void;
    onError?: (error: any) => void;
    onEnd?: () => void;
    continuous?: boolean;
    interimResults?: boolean;
    lang?: string;
  }

  export interface UseSpeechRecognitionReturn {
    listen: () => void;
    stop: () => void;
    listening: boolean;
    transcript: string;
  }

  export function useSpeechRecognition(
    options?: UseSpeechRecognitionOptions
  ): UseSpeechRecognitionReturn;
}
