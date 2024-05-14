"""module with dummy test to run CI"""
from django.test import TestCase


class DummyTest(TestCase):
    """dummy test"""

    def test_dummy_test(self):
        """dummy test function"""
        self.assertEqual("poni", "poni")
