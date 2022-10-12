import type { TriggerOptions } from "./createDomEvent";
import {
  ComponentInternalInstance,
  ComponentOptions,
  ComponentPublicInstance,
  ComputedOptions,
  CreateComponentPublicInstance,
  FunctionalComponent,
  MethodOptions,
} from "vue";
import { DomEventNameWithModifier } from "./constants/dom-events";
import type { VueWrapper } from "./vueWrapper";
import {
  DefinedComponent,
  FindAllComponentsSelector,
  FindComponentSelector,
  NameSelector,
  RefSelector,
  VueNode,
} from "./types";
import WrapperLike from "./interfaces/wrapperLike";
import type { DOMWrapper } from "./domWrapper";
export default abstract class BaseWrapper<ElementType extends Node>
  implements WrapperLike
{
  protected readonly wrapperElement: VueNode<ElementType>;
  protected abstract getRootNodes(): VueNode[];
  get element(): VueNode<ElementType>;
  protected constructor(element: ElementType);
  protected findAllDOMElements(selector: string): Element[];
  find<K extends keyof HTMLElementTagNameMap>(
    selector: K
  ): DOMWrapper<HTMLElementTagNameMap[K]>;
  find<K extends keyof SVGElementTagNameMap>(
    selector: K
  ): DOMWrapper<SVGElementTagNameMap[K]>;
  find<T extends Element = Element>(selector: string): DOMWrapper<T>;
  find<T extends Node = Node>(selector: string | RefSelector): DOMWrapper<T>;
  abstract findAll<K extends keyof HTMLElementTagNameMap>(
    selector: K
  ): DOMWrapper<HTMLElementTagNameMap[K]>[];
  abstract findAll<K extends keyof SVGElementTagNameMap>(
    selector: K
  ): DOMWrapper<SVGElementTagNameMap[K]>[];
  abstract findAll<T extends Element>(selector: string): DOMWrapper<T>[];
  abstract findAll(selector: string): DOMWrapper<Element>[];
  findComponent<T extends never>(selector: string): WrapperLike;
  findComponent<
    Props,
    RawBindings = any,
    D = any,
    C extends ComputedOptions = ComputedOptions,
    M extends MethodOptions = MethodOptions
  >(
    selector: ComponentOptions<Props, RawBindings, D, C, M>
  ): VueWrapper<CreateComponentPublicInstance<Props, RawBindings, D, C, M>>;
  findComponent<T extends ComponentOptions>(
    selector: string
  ): VueWrapper<
    T extends ComponentOptions<
      infer Props,
      infer RawBindings,
      infer D,
      infer C,
      infer M
    >
      ? CreateComponentPublicInstance<Props, RawBindings, D, C, M>
      : VueWrapper<CreateComponentPublicInstance>
  >;
  findComponent<T extends DefinedComponent>(
    selector: T | Exclude<FindComponentSelector, FunctionalComponent>
  ): VueWrapper<InstanceType<T>>;
  findComponent<T extends FunctionalComponent>(selector: T): DOMWrapper<Node>;
  findComponent<T extends FunctionalComponent>(
    selector: string
  ): DOMWrapper<Element>;
  findComponent<T extends never>(
    selector: NameSelector | RefSelector
  ): VueWrapper;
  findComponent<T extends ComponentPublicInstance>(
    selector: T | FindComponentSelector
  ): VueWrapper<T>;
  findComponent<T extends never>(selector: FindComponentSelector): WrapperLike;
  findAllComponents<T extends never>(selector: string): WrapperLike[];
  findAllComponents<T extends DefinedComponent>(
    selector: T | Exclude<FindAllComponentsSelector, FunctionalComponent>
  ): VueWrapper<InstanceType<T>>[];
  findAllComponents<T extends FunctionalComponent>(
    selector: T
  ): DOMWrapper<Node>[];
  findAllComponents<T extends FunctionalComponent>(
    selector: string
  ): DOMWrapper<Element>[];
  findAllComponents<T extends never>(selector: NameSelector): VueWrapper[];
  findAllComponents<T extends ComponentPublicInstance>(
    selector: T | FindAllComponentsSelector
  ): VueWrapper<T>[];
  findAllComponents<T extends never>(
    selector: FindAllComponentsSelector
  ): WrapperLike[];
  abstract setValue(value?: any): Promise<void>;
  html(): string;
  classes(): string[];
  classes(className: string): boolean;
  attributes(): {
    [key: string]: string;
  };
  attributes(key: string): string | undefined;
  text(): string;
  exists(): boolean;
  get<K extends keyof HTMLElementTagNameMap>(
    selector: K
  ): Omit<DOMWrapper<HTMLElementTagNameMap[K]>, "exists">;
  get<K extends keyof SVGElementTagNameMap>(
    selector: K
  ): Omit<DOMWrapper<SVGElementTagNameMap[K]>, "exists">;
  get<T extends Element = Element>(
    selector: string
  ): Omit<DOMWrapper<T>, "exists">;
  get<T extends Node = Node>(
    selector: string | RefSelector
  ): Omit<DOMWrapper<T>, "exists">;
  getComponent<T extends never>(selector: string): Omit<WrapperLike, "exists">;
  getComponent<T extends DefinedComponent>(
    selector: T | Exclude<FindComponentSelector, FunctionalComponent>
  ): Omit<VueWrapper<InstanceType<T>>, "exists">;
  getComponent<T extends FunctionalComponent>(
    selector: T | string
  ): Omit<DOMWrapper<Element>, "exists">;
  getComponent<T extends never>(
    selector: NameSelector | RefSelector
  ): Omit<VueWrapper, "exists">;
  getComponent<T extends ComponentPublicInstance>(
    selector: T | FindComponentSelector
  ): Omit<VueWrapper<T>, "exists">;
  getComponent<T extends never>(
    selector: FindComponentSelector
  ): Omit<WrapperLike, "exists">;
  protected isDisabled: () => boolean;
  isVisible(): boolean;
  protected abstract getCurrentComponent(): ComponentInternalInstance | void;
  trigger(
    eventString: DomEventNameWithModifier,
    options?: TriggerOptions
  ): Promise<void>;
  trigger(eventString: string, options?: TriggerOptions): Promise<void>;
}
