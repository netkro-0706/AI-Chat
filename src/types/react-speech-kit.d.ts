declare module "react-speech-kit" {
  export interface ListenOptions {
    lang?: string;
    continuous?: boolean;
    interimResults?: boolean;
  }

  export interface UseSpeechRecognitionOptions {
    onResult?: (text: string) => void;
    onError?: (error: any) => void;
    onEnd?: () => void;
  }

  export interface UseSpeechRecognitionReturn {
    listen: (options?: ListenOptions) => void; // 여기 수정
    stop: () => void;
    listening: boolean;
    transcript: string;
  }

  export function useSpeechRecognition(
    options?: UseSpeechRecognitionOptions
  ): UseSpeechRecognitionReturn;
}
