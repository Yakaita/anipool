import { Dialog, Transition } from '@headlessui/react';
import CloseIcon from '@heroicons/react/24/outline/XCircleIcon';
import { Fragment } from 'react';
interface ModalProps {
  title?: string;
  open: boolean;
  disableBackdropClick?: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({
  title = '',
  open,
  onClose,
  disableBackdropClick = false,
  children,
}: ModalProps) => {
  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={disableBackdropClick ? () => {} : onClose}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-out duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-sm bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="div"
                  className="flex items-center justify-between"
                >
                  <span className="text-gray-900 text-lg font-medium uppercase leading-6 text-indigo-800">
                    {title}
                  </span>
                  <button onClick={onClose}>
                    <CloseIcon className="h-7 w-7 text-red-500 hover:text-red-400" />
                  </button>
                </Dialog.Title>
                <div className="mt-2">{children}</div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
