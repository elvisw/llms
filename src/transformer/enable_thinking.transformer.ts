import { UnifiedChatRequest } from "../types/llm";
import { Transformer, TransformerOptions } from "../types/transformer";

export class EnableThinkingTransformer implements Transformer {
  static TransformerName = "enable_thinking";
  enable_thinking: boolean;

  constructor(private readonly options?: TransformerOptions) {
    this.enable_thinking = this.options?.enable_thinking ?? false;
  }

  async transformRequestIn(request: UnifiedChatRequest): Promise<UnifiedChatRequest> {
    // 添加 enable_thinking 字段到请求中
    request.enable_thinking = this.enable_thinking;
    return request;
  }
}